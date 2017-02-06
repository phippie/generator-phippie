'use strict';

// version of docker images
const DOCKER_JAVA_JRE = 'openjdk:8-jre-alpine';
const DOCKER_MYSQL = 'mysql:5.7.13';
const DOCKER_MARIADB = 'mariadb:10.1.17';
const DOCKER_POSTGRESQL = 'postgres:9.5.4';
const DOCKER_MONGODB = 'mongo:3.2.10';
const DOCKER_CASSANDRA = 'cassandra:3.9';
const DOCKER_MSSQL = 'microsoft/mssql-server-linux:latest';
const DOCKER_ORACLE = 'sath89/oracle-12c:latest';
const DOCKER_ELASTICSEARCH = 'elasticsearch:2.4.1';
const DOCKER_KAFKA = 'wurstmeister/kafka:0.10.0.1';
const DOCKER_ZOOKEEPER = 'wurstmeister/zookeeper:3.4.6';
const DOCKER_SONAR = 'sonarqube:6.2-alpine';
const DOCKER_PROMETHEUS = 'prom/prometheus:v1.4.1';
const DOCKER_PROMETHEUS_ALERTMANAGER = 'prom/alertmanager:v0.5.1';
const DOCKER_GRAFANA = 'grafana/grafana:4.0.2';

// all constants used throughout all generators

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

// Note: this will be prepended with 'target/' for Maven, or with 'build/' for Gradle.
const CLIENT_DIST_DIR = 'www/';

const SUPPORTED_VALIDATION_RULES = ['required', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

// documentation constants
const PHIPPIE_DOCUMENTATION_URL = 'https://phippie.github.io';

const constants = {
    QUESTIONS: 15, // maximum possible number of questions
    CLIENT_QUESTIONS: 4,
    SERVER_QUESTIONS: 15,
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    DOCKER_DIR: MAIN_DIR + 'docker/',

    MAIN_DIR: MAIN_DIR,
    TEST_DIR: TEST_DIR,

    CLIENT_MAIN_SRC_DIR: MAIN_DIR + 'webapp/',
    CLIENT_TEST_SRC_DIR: TEST_DIR + 'javascript/',
    CLIENT_DIST_DIR: CLIENT_DIST_DIR,
    ANGULAR_DIR: MAIN_DIR + 'webapp/app/',

    SERVER_MAIN_SRC_DIR: MAIN_DIR + 'java/',
    SERVER_TEST_SRC_DIR: TEST_DIR + 'java/',
    SERVER_TEST_RES_DIR: TEST_DIR + 'resources/',

    //entity related
    SUPPORTED_VALIDATION_RULES: SUPPORTED_VALIDATION_RULES,

    PHIPPIE_DOCUMENTATION_URL: PHIPPIE_DOCUMENTATION_URL,

    DOCKER_JAVA_JRE: DOCKER_JAVA_JRE,
    DOCKER_MYSQL: DOCKER_MYSQL,
    DOCKER_MARIADB: DOCKER_MARIADB,
    DOCKER_POSTGRESQL: DOCKER_POSTGRESQL,
    DOCKER_MONGODB: DOCKER_MONGODB,
    DOCKER_CASSANDRA: DOCKER_CASSANDRA,
    DOCKER_MSSQL: DOCKER_MSSQL,
    DOCKER_ORACLE: DOCKER_ORACLE,
    DOCKER_ELASTICSEARCH: DOCKER_ELASTICSEARCH,
    DOCKER_KAFKA: DOCKER_KAFKA,
    DOCKER_ZOOKEEPER: DOCKER_ZOOKEEPER,
    DOCKER_SONAR: DOCKER_SONAR,
    DOCKER_CONSUL: DOCKER_CONSUL,
    DOCKER_CONSUL_CONFIG_LOADER: DOCKER_CONSUL_CONFIG_LOADER,
    DOCKER_PROMETHEUS: DOCKER_PROMETHEUS,
    DOCKER_PROMETHEUS_ALERTMANAGER: DOCKER_PROMETHEUS_ALERTMANAGER,
    DOCKER_GRAFANA: DOCKER_GRAFANA
};


module.exports = constants;