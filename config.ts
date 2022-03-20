import * as dotenv from 'dotenv'


dotenv.config()


const env = (process.env.NODE_ENV)? process.env.NODE_ENV: `development`


const configs = {
  development: {
    db:{
      gateway:{
        full_url: process.env.DB_GATEWAY_DEVELOP,
        url: process.env.DB_GATEWAY_URL_DEVELOP,
        host: process.env.DB_GATEWAY_HOST_DEVELOP,
        srv: process.env.DB_GATEWAY_SRV_DEVELOP,
        port: process.env.DB_GATEWAY_PORT_DEVELOP,
        name: process.env.DB_GATEWAY_NAME_DEVELOP,
        username: process.env.DB_GATEWAY_USERNAME_DEVELOP,
        password: process.env.DB_GATEWAY_PASSWORD_DEVELOP,
        authentication: process.env.DB_GATEWAY_AUTHENTICATION_DEVELOP,
        ssl: process.env.DB_GATEWAY_SSL_DEVELOP
      },
      view:{
        full_url: process.env.DB_VIEW_DEVELOP,
        url: process.env.DB_VIEW_URL_DEVELOP,
        host: process.env.DB_VIEW_HOST_DEVELOP,
        srv: process.env.DB_VIEW_SRV_DEVELOP,
        port: process.env.DB_VIEW_PORT_DEVELOP,
        name: process.env.DB_VIEW_NAME_DEVELOP,
        username: process.env.DB_VIEW_USERNAME_DEVELOP,
        password: process.env.DB_VIEW_PASSWORD_DEVELOP,
        authentication: process.env.DB_VIEW_AUTHENTICATION_DEVELOP,
        ssl: process.env.DB_VIEW_SSL_DEVELOP
      },
      snapshot:{
        full_url: process.env.DB_SNAPSHOT_DEVELOP,
        url: process.env.DB_SNAPSHOT_URL_DEVELOP,
        host: process.env.DB_SNAPSHOT_HOST_DEVELOP,
        srv: process.env.DB_SNAPSHOT_SRV_DEVELOP,
        port: process.env.DB_SNAPSHOT_PORT_DEVELOP,
        name: process.env.DB_SNAPSHOT_NAME_DEVELOP,
        username: process.env.DB_SNAPSHOT_USERNAME_DEVELOP,
        password: process.env.DB_SNAPSHOT_PASSWORD_DEVELOP,
        authentication: process.env.DB_SNAPSHOT_AUTHENTICATION_DEVELOP,
        ssl: process.env.DB_SNAPSHOT_SSL_DEVELOP
      },
    },
    es:{
      endpoint: process.env.EVENT_STORE_ENDPOINT_DEVELOP,
      username: process.env.EVENT_STORE_USERNAME_DEVELOP,
      password: process.env.EVENT_STORE_PASSWORD_DEVELOP
    },
    gb:{
      url: process.env.GB_URL_DEVELOP,
      secret_key: process.env.GB_SECRET_KEY_DEVELOP,
      customer_key: process.env.GB_CUSTOMER_KEY_DEVELOP,
      public_key: process.env.GB_PUBLIC_KEY_DEVELOP
    },
    gateway_env:{
      url: process.env.GATEWAY_URL_DEVELOP,
      host: process.env.GATEWAY_HOST_DEVELOP,
      port: process.env.GATEWAY_PORT_DEVELOP
    },
    account:{
      gateway: {
        merchant: {
          username: process.env.GATEWAY_MERCHANT_USERNAME_DEVELOP,
          password: process.env.GATEWAY_MERCHANT_PASSWORD_DEVELOP,
        },
        notification:{
          username:  process.env.GATEWAY_NOTIFICATION_USERNAME_DEVELOP,
          password: process.env.GATEWAY_NOTIFICATION_PASSWORD_DEVELOP,
        },
        partner: {
          username: process.env.GATEWAY_PARTNER_USERNAME_DEVELOP,
          password: process.env.GATEWAY_PARTNER_PASSWORD_DEVELOP,
        }
      },
      view:{
        merchant: {
          username: process.env.VIEW_MERCHANT_USERNAME_DEVELOP,
          password: process.env.VIEW_MERCHANT_PASSWORD_DEVELOP,
        },
        notification:{
          username:  process.env.VIEW_NOTIFICATION_USERNAME_DEVELOP,
          password: process.env.VIEW_NOTIFICATION_PASSWORD_DEVELOP,
        },
        partner: {
          username: process.env.VIEW_PARTNER_USERNAME_DEVELOP,
          password: process.env.VIEW_PARTNER_PASSWORD_DEVELOP,
        }
      }
    },
    view_env:{
      url: process.env.VIEW_URL_DEVELOP,
      host: process.env.VIEW_HOST_DEVELOP,
      port: process.env.VIEW_PORT_DEVELOP
    },
    notification: {
      smpt:{
        host: process.env.SMTP_HOST_DEVELOP,
        username: process.env.SMTP_USERNAME_DEVELOP,
        password: process.env.SMTP_PASSWORD_DEVELOP
      }
    },
    storage:{
      do:{
        access_key: process.env.DO_SPACE_ACCESS_KEY_DEVELOP,
        secret_key: process.env.DO_SPACE_SECRET_KEY_DEVELOP,
        endpoint: process.env.DO_SPACE_ENDPOINT_DEVELOP,
        bucket: process.env.DO_SPACE_BUCKET_DEVELOP,
        directory: process.env.DO_SPACE_DIRECTORY_DEVELOP
      }
    },
    jwt:{
      secret: process.env.JWT_SECRET_DEVELOP
    }
  },
  production: {
    db:{
      gateway:{
        full_url: process.env.DB_GATEWAY,
        url: process.env.DB_GATEWAY_URL,
        host: process.env.DB_GATEWAY_HOST,
        srv: process.env.DB_GATEWAY_SRV,
        port: process.env.DB_GATEWAY_PORT,
        name: process.env.DB_GATEWAY_NAME,
        username: process.env.DB_GATEWAY_USERNAME,
        password: process.env.DB_GATEWAY_PASSWORD,
        ssl: process.env.DB_GATEWAY_SSL
      },
      view:{
        full_url: process.env.DB_VIEW,
        url: process.env.DB_VIEW_URL,
        host: process.env.DB_VIEW_HOST,
        srv: process.env.DB_VIEW_SRV,
        port: process.env.DB_VIEW_PORT,
        name: process.env.DB_VIEW_NAME,
        username: process.env.DB_VIEW_USERNAME,
        password: process.env.DB_VIEW_PASSWORD,
        ssl: process.env.DB_VIEW_SSL
      },
      snapshot:{
        full_url: process.env.DB_SNAPSHOT,
        url: process.env.DB_SNAPSHOT_URL,
        host: process.env.DB_SNAPSHOT_HOST,
        srv: process.env.DB_SNAPSHOT_SRV,
        port: process.env.DB_SNAPSHOT_PORT,
        name: process.env.DB_SNAPSHOT_NAME,
        username: process.env.DB_SNAPSHOT_USERNAME,
        password: process.env.DB_SNAPSHOT_PASSWORD,
        ssl: process.env.DB_SNAPSHOT_SSL
      },
    },
    es:{
      endpoint: process.env.EVENT_STORE_ENDPOINT,
      username: process.env.EVENT_STORE_USERNAME,
      password: process.env.EVENT_STORE_PASSWORD
    },
    gb:{
      url: process.env.GB_URL,
      secret_key: process.env.GB_SECRET_KEY,
      customer_key: process.env.GB_CUSTOMER_KEY,
      public_key: process.env.GB_PUBLIC_KEY
    },
    gateway_env:{
      url: process.env.GATEWAY_URL,
      host: process.env.GATEWAY_HOST,
      port: process.env.GATEWAY_PORT
    },
    account:{
      gateway: {
        merchant: {
          username: process.env.GATEWAY_MERCHANT_USERNAME,
          password: process.env.GATEWAY_MERCHANT_PASSWORD,
        },
        notification:{
          username:  process.env.GATEWAY_NOTIFICATION_USERNAME,
          password: process.env.GATEWAY_NOTIFICATION_PASSWORD,
        },
        partner: {
          username: process.env.GATEWAY_PARTNER_USERNAME,
          password: process.env.GATEWAY_PARTNER_PASSWORD,
        }
      },
      view:{
        merchant: {
          username: process.env.VIEW_MERCHANT_USERNAME,
          password: process.env.VIEW_MERCHANT_PASSWORD,
        },
        notification:{
          username:  process.env.VIEW_NOTIFICATION_USERNAME,
          password: process.env.VIEW_NOTIFICATION_PASSWORD,
        },
        partner: {
          username: process.env.VIEW_PARTNER_USERNAME,
          password: process.env.VIEW_PARTNER_PASSWORD,
        }
      }
    },
    view_env:{
      url: process.env.VIEW_URL,
      host: process.env.VIEW_HOST,
      port: process.env.VIEW_PORT
    },
    notification: {
      smpt:{
        host: process.env.SMTP_HOST,
        username: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD
      }
    },
    storage:{
      do:{
        access_key: process.env.DO_SPACE_ACCESS_KEY,
        secret_key: process.env.DO_SPACE_SECRET_KEY,
        endpoint: process.env.DO_SPACE_ENDPOINT,
        bucket: process.env.DO_SPACE_BUCKET,
        directory: process.env.DO_SPACE_DIRECTORY
      }
    },
    jwt:{
      secret: process.env.JWT_SECRET
    }
  }
}

const config =  { ...configs[env] } as any

export { config }
