import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri")
  try {

    await mongoose.connect(dbUri)
    logger.info("Conectado com Sucesso!")

  } catch (e) {
    logger.error("Não foi possivel Conectar")
    logger.error(`ERROR: ${e}`)
    process.exit(1)
  }
}

export default connect;