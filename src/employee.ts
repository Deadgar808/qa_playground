// import {
//   addSyntheticTrailingComment,
//   isConstructorDeclaration,
// } from "typescript";

class EmployeeRecord {
  //prop1
  name: string;
  //prop2
  phone: string;
  //prop3
  email: string;
  id: string;
  constructor(name: string, phone: string, email: string, id: string) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
  }
  //method is a bit of code reused within a class.
  toString(): string {
    let output =
      `name: ${this.name}\n` +
      `phone: ${this.phone}\n` +
      `email: ${this.email}\n` +
      `id: ${this.id}`;
    return output;
  }
}

const employeeData: Array<EmployeeRecord> = [
  new EmployeeRecord("Bill Murray", "8015551166", "bill@murray.com", "BM001"),
  new EmployeeRecord("Frank Murray", "8016665555", "frank@murray.com", "BM002"),
];
//testdata 0 = bill and testdata 1 = frank
console.log(employeeData[0].toString(), employeeData[1].toString());

/*
bill murray is going to be acting as a boxer via method acting
let billMurray = acting.method("boxer");
*/
