'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog-api-v2';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-blog-api-v2';
exports.PORT = process.env.PORT || 8080;