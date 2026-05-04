import { ipcMain } from 'electron'
import {
  createConnection,
  disconnectConnection,
  listDatabases,
  listTables,
  executeQuery,
  getActiveConnections,
  testConnection,
  createDatabase,
  dropDatabase,
  createTable,
  dropTable,
  getTableStructure,
  alterTableAddColumn
} from './databaseConnection.js'
import {
  getSavedConnections,
  saveConnection,
  deleteSavedConnection
} from './databaseConfig.js'

export function registerDatabaseHandlers() {
  ipcMain.handle('database-connect', async (_event, config) => {
    return await createConnection(config)
  })

  ipcMain.handle('database-disconnect', async (_event, connectionId) => {
    return await disconnectConnection(connectionId)
  })

  ipcMain.handle('database-list-databases', async (_event, connectionId) => {
    return await listDatabases(connectionId)
  })

  ipcMain.handle('database-list-tables', async (_event, connectionId, database) => {
    return await listTables(connectionId, database)
  })

  ipcMain.handle('database-execute-query', async (_event, connectionId, database, sql) => {
    return await executeQuery(connectionId, database, sql)
  })

  ipcMain.handle('database-get-connections', async () => {
    return getActiveConnections()
  })

  // 保存的连接配置 CRUD
  ipcMain.handle('database-get-saved-connections', async () => {
    return getSavedConnections()
  })

  ipcMain.handle('database-save-connection', async (_event, config) => {
    return saveConnection(config)
  })

  ipcMain.handle('database-delete-saved-connection', async (_event, id) => {
    return deleteSavedConnection(id)
  })

  // 连接测试
  ipcMain.handle('database-test-connection', async (_event, config) => {
    return await testConnection(config)
  })

  // 数据库操作
  ipcMain.handle('database-create-database', async (_event, connectionId, databaseName, charset, collation) => {
    return await createDatabase(connectionId, databaseName, charset, collation)
  })

  ipcMain.handle('database-drop-database', async (_event, connectionId, databaseName) => {
    return await dropDatabase(connectionId, databaseName)
  })

  // 表操作
  ipcMain.handle('database-create-table', async (_event, connectionId, database, tableName, columns) => {
    return await createTable(connectionId, database, tableName, columns)
  })

  ipcMain.handle('database-drop-table', async (_event, connectionId, database, tableName) => {
    return await dropTable(connectionId, database, tableName)
  })

  ipcMain.handle('database-get-table-structure', async (_event, connectionId, database, tableName) => {
    return await getTableStructure(connectionId, database, tableName)
  })

  ipcMain.handle('database-alter-table-add-column', async (_event, connectionId, database, tableName, column) => {
    return await alterTableAddColumn(connectionId, database, tableName, column)
  })
}
