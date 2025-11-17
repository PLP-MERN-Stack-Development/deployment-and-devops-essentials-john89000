const mongoose = require('mongoose');

class Database {
    constructor() {
        this.mongoURI = process.env.MONGODB_URI;
    }

    async connect() {
        try {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Connection pooling settings
                maxPoolSize: 50,        // Maximum number of connections in the pool
                minPoolSize: 10,        // Minimum number of connections in the pool
                socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
                serverSelectionTimeoutMS: 5000,  // Timeout after 5 seconds of server selection failure
                heartbeatFrequencyMS: 10000,    // Check server status every 10 seconds
                retryWrites: true,
                w: 'majority'          // Write concern for better data consistency
            };

            await mongoose.connect(this.mongoURI, options);
            
            // Connection event handlers
            mongoose.connection.on('connected', () => {
                console.log('🎉 MongoDB connected successfully');
            });

            mongoose.connection.on('error', (err) => {
                console.error('❌ MongoDB connection error:', err);
                // Implement retry logic for production
                setTimeout(() => this.connect(), 5000);
            });

            mongoose.connection.on('disconnected', () => {
                console.log('❗ MongoDB disconnected');
                // Attempt to reconnect
                setTimeout(() => this.connect(), 5000);
            });

            // Graceful shutdown
            process.on('SIGINT', async () => {
                try {
                    await mongoose.connection.close();
                    console.log('MongoDB connection closed through app termination');
                    process.exit(0);
                } catch (err) {
                    console.error('Error during MongoDB shutdown:', err);
                    process.exit(1);
                }
            });

        } catch (error) {
            console.error('Database connection failed:', error);
            process.exit(1);
        }
    }
}

module.exports = new Database();