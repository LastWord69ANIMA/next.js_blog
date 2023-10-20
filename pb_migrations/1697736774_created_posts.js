/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bnmc7x2kebhfauv",
    "created": "2023-10-19 17:32:54.037Z",
    "updated": "2023-10-19 17:32:54.037Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_gxoIaHi` ON `posts` (\n  `comment`,\n  `created`,\n  `updated`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv");

  return dao.deleteCollection(collection);
})
