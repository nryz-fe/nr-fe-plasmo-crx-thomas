declare namespace NodeJS {
  interface ProcessEnv {
    PLASMO_PUBLIC_ENV?: "development" | "production"
    PLASMO_PUBLIC_SHIELD_FREQUENCY?: number
  }
}
