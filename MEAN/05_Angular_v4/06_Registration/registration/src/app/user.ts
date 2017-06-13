export class User {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public pw: string = "",
    public street: string = "",
    public street2: string = "",
    public city: string = "",
    public state: string = "",
    public isFeelingLucky: boolean = null,
  )
  {}
}
