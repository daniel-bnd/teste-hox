export class DataFormatter {
  private date: Date

  constructor(dateStr: Date) {
    this.date = dateStr
  }

  get FormattedData() {
    const day =
      this.date.getDay() < 10
        ? `0${Number(this.date.getDay()) + 1}`
        : Number(this.date.getDay()) + 1

    const month =
      this.date.getMonth() < 10
        ? `0${Number(this.date.getMonth()) + 1}`
        : Number(this.date.getMonth() + 1)

    return `${day}/${month}/${this.date.getFullYear()}`
  }
}
