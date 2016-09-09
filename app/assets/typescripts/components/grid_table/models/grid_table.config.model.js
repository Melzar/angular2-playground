"use strict";
var BaseTableConfig = (function () {
    function BaseTableConfig() {
        this._tableId = 'grid_table';
        this._tableHeaderTemplate = 'components/grid_table/grid_header/default_table_header.html';
        this._tableBodyTemplate = 'components/grid_table/grid_body/default_table_body.html';
        this._tableFieldHeaderCellTemplate = 'components/grid_table/grid_header_cell/default_field_header_cell.html';
        this._tableFieldCellTemplate = 'components/grid_table/grid_body_cell/default_field_cell.html';
        this._fieldsLabels = {};
        this._fields = [];
    }
    Object.defineProperty(BaseTableConfig.prototype, "tableId", {
        get: function () {
            return this._tableId;
        },
        set: function (value) {
            this._tableId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "fieldsLabels", {
        get: function () {
            return this._fieldsLabels;
        },
        set: function (value) {
            this._fieldsLabels = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "tableHeaderTemplate", {
        get: function () {
            return this._tableHeaderTemplate;
        },
        set: function (value) {
            this._tableHeaderTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "tableBodyTemplate", {
        get: function () {
            return this._tableBodyTemplate;
        },
        set: function (value) {
            this._tableBodyTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "tableFieldHeaderCellTemplate", {
        get: function () {
            return this._tableFieldHeaderCellTemplate;
        },
        set: function (value) {
            this._tableFieldHeaderCellTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTableConfig.prototype, "tableFieldCellTemplate", {
        get: function () {
            return this._tableFieldCellTemplate;
        },
        set: function (value) {
            this._tableFieldCellTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTableConfig;
}());
exports.BaseTableConfig = BaseTableConfig;
//# sourceMappingURL=grid_table.config.model.js.map