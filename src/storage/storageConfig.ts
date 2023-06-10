const DATABASE_NAME = '@yourFinance';
/**
 * @app:collection
 */

const USER_COLLECTION = `${DATABASE_NAME}:user`;

const TOKEN_COLLECTION = `${DATABASE_NAME}:token`;

const FEEDBACK_COLLECTION = `${DATABASE_NAME}:feedback`;

export { FEEDBACK_COLLECTION, TOKEN_COLLECTION, USER_COLLECTION };
