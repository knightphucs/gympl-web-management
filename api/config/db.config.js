module.exports = {
    host: 'localhost',
    PORT: 1433,
    user: 'kazyy',
    password: 'kazyy3103',
    database: 'GymFitnessPL',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
            useUTC: false,
            dateFirst: 1,
            enableArithAbort: true
        },
        // Ensure proper date handling
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
                return field.string();
            }
            return next();
        }
    },
    timezone: '+07:00', // Set your timezone
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
