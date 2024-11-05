class DataDto {
  constructor(model) {
    this.id = 1
    this.nameOrganization = model.nameOrganization.value
    this.phone = model.phone.value
    this.typePremises = this.parseTypePremises(model.typePremises.value)
    this.address = model.address.value
    this.areaFrom = model.area.value.at(0)
    this.areaTo = model.area.value.at(1)
    this.dateFrom = model.date.value.at(0)
    this.dateTo = model.date.value.at(1)
  }

  parseTypePremises(type) {
    let result = null

    if (Array.isArray(type)) result = type.filter(Number.isInteger)
    else result = type

    return result
  }

  get() {
    return {
      ...this,
    }
  }
}

export default DataDto
