"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var grid_table_config_model_1 = require("../../../components/grid_table/models/grid_table.config.model");
var UserAssociationsGridTableConfig = (function (_super) {
    __extends(UserAssociationsGridTableConfig, _super);
    function UserAssociationsGridTableConfig() {
        _super.call(this);
        this.fieldsLabels = { id: 'ID', name: 'Name', surname: 'Surname', associatedTo: 'Associations' };
        this.fields = ['id', 'name', 'surname', 'associatedTo'];
    }
    return UserAssociationsGridTableConfig;
}(grid_table_config_model_1.BaseTableConfig));
exports.UserAssociationsGridTableConfig = UserAssociationsGridTableConfig;
//# sourceMappingURL=user.associations.grid-table.config.js.map