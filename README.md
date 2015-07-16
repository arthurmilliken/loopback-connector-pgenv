# loopback-connector-pgenv
loopback postgres connector that can be configured with environment variable tokens

## Usage
In a loopback application, add an entry to server/datasources.json, with the "properties" section containing the properties to pass into the postgresql connector. Values can be
replaced with $ENV_VARIABLE_NAME, like this:

	"myDataSource": {
		"connector": "pgenv",
		"properties": {
			"name": "myDataSource",
			"connector": "postgresql",
			"url": "$DATABASE_URL"
		}
	}

This will replace the "url" setting with the value of the DATABASE_URL environment variable.

This can also use the following format:

	"myDataSource": {
		"connector": "pgenv",
		"properties": {
			"name": "myDataSource",
			"host": "$DB_HOST",
			"port": "$DB_PORT",
			"database": "$DB_NAME",
			"username": "$DB_USER",
			"password": "$DB_PASS",
			"connector": "postgresql",
			"ssl": true
		}
	}
