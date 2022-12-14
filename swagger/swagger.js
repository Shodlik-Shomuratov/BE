// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "shop-service",
    "version": "1"
  },
  "paths": {
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/products/{productId}": {
      "get": {
        "summary": "getProductsById",
        "description": "",
        "operationId": "getProductsById.get.products/{productId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "Products": {
      "properties": {
        "id": {
          "title": "Products.id",
          "type": "string"
        },
        "title": {
          "title": "Products.title",
          "type": "string"
        },
        "description": {
          "title": "Products.description",
          "type": "string"
        },
        "price": {
          "title": "Products.price",
          "type": "number"
        }
      },
      "required": [
        "id",
        "title",
        "description",
        "price"
      ],
      "additionalProperties": false,
      "title": "Products",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev"
};