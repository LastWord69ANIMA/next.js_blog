/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `posts` (\n  `title`,\n  `comment`,\n  `created`,\n  `updated`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2g4kzqkc",
    "name": "comment",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 400,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mfd3rayi",
    "name": "title",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `posts` (\n  `comment`,\n  `created`,\n  `updated`\n)"
  ]

  // remove
  collection.schema.removeField("2g4kzqkc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mfd3rayi",
    "name": "comment",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 400,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
