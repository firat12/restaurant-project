import { EmailValidator } from "@angular/forms";

export interface Restaurant {
  name: string,
  email: string | EmailValidator,
  address: string,
  personelCount: number
}
