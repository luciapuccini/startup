class Logger {
  constructor() {}
  log(movie, functionName) {
    console.log(`${movie.title} ${functionName}`)
  }
}
export {
  Logger
}