import { FormDefinition } from './models/form-definition.model';

export const sampleFormDefinition: FormDefinition = [
  {
    fieldtype: "text",
    name: "Order No",
    group: "General Information",
    validator: ["required"]
  },
  {
    fieldtype: "date",
    name: "OrderedDate",
    group: "General Information",
    validator: ["required"]
  },
  {
    fieldtype: "text",
    name: "OrderedInfo",
    group: "General Information",
    validator: ["required"],
    condition: "and",
    rules: [
      { field: "OrderedDate", operator: "!=", value: "" }
    ]
  },
  {
    fieldtype: "number",
    name: "Price",
    group: "Product Information",
    validator: ["required"]
  },
  {
    fieldtype: "boolean",
    name: "Refurbished",
    group: "Product Information",
    selectList: ["Yes", "No"]
  },
  {
    fieldtype: "text",
    name: "Address",
    group: "Product Information",
    condition: "or",
    rules: [
      { field: "Order No", operator: ">=", value: "100" },
      { field: "Price", operator: "<=", value: "100" }
    ]
  }
];
