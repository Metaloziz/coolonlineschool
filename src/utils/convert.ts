import { ResponseRegister } from '@app/types/AuthType';
import { RegisterData, SexEnum } from '@components/elements/registration-data/RegistrationData';
import { formatDate } from '@utils/FormateDate';

export const convert = (value: RegisterData) => {
  const convertType: ResponseRegister = {} as ResponseRegister;
  convertType.phone = value.parentsPhone;
  convertType.email = value.parentsEmail;
  convertType.parentFirstName = value.parentsName;
  convertType.parentMiddleName = value.parentsPatronymic;
  convertType.parentLastName = value.parentsLastName;
  convertType.studentFirstName = value.studentsName;
  convertType.studentMiddleName = value.studentsPatronymic;
  convertType.studentLastName = value.studentsLastName;
  convertType.city = value.studentsCity;
  if (value.studentsBirthDate) {
    convertType.birthdate = formatDate(value.studentsBirthDate);
  }
  convertType.parentSex = value.parentSex === SexEnum.Male;
  convertType.studentSex = value.studentSex === SexEnum.Male;
  // if (value.codeTariff) {
  //   convertType.smsCode = value.codeTariff;
  // }
  return convertType;
};
