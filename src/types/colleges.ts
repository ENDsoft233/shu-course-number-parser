import { BiMap } from '.';
import * as Majors from './majors';

export const colleges: BiMap<BiMap<string> | BiMap<string>[]> = {
  '01': [Majors.collegeOfScience, Majors.collegeOfMechanics],
  '18': Majors.collegeOfMechanics,
  '02': [
    Majors.collegeOfLiberalArts,
    Majors.collegeOfSocialSciences,
    Majors.collegeOfCulturalHeritageAndInformationManagement,
  ],
  '03': Majors.collegeOfForeignLanguages,
  '04': [
    Majors.collegeOfEconomics,
    Majors.collegeOfManagement,
    Majors.collegeOfCulturalHeritageAndInformationManagement,
  ],
  '06': Majors.collegeOfLaw,
  '07': Majors.collegeOfCommunicationAndInformationEngineering,
  '08': Majors.collegeOfComputerScienceAndTechnology,
  '09': Majors.collegeOfMechanicalAndElectricalEngineeringAndAutomation,
  '10': Majors.collegeOfMaterialsScienceAndEngineering,
  '11': Majors.collegeOfEnvironmentalAndChemicalEngineering,
  '12': Majors.collegeOfLifeSciences,
  '13': Majors.collegeOfArts,
  '14': Majors.collegeOfFilm,
  '15': Majors.collegeOfSydney,
  '16': Majors.collegeOfMarxism,
  '17': Majors.collegeOfJournalismAndCommunication,
  '20': Majors.collegeOfInternationalEducation,
  '23': Majors.collegeOfSinoEuropeanEngineeringTechnology,
  '24': Majors.collegeOfManagement,
  '25': Majors.collegeOfCulturalHeritageAndInformationManagement,
  '27': Majors.collegeOfResidents,
  '28': Majors.collegeOfSocialSciences,
  '29': Majors.collegeOfShanghaiCooperationOrganization,
  '30': Majors.collegeOfMBAEducationManagementCenter,
  '31': Majors.collegeOfMusic,
  '32': Majors.collegeOfVancouverFilm,
  '33': Majors.collegeOfQianWeichang,
  '34': Majors.collegeOfMarxism,
  '35': Majors.collegeOfMechanics,
  '36': Majors.collegeOfMicroelectronics,
  '37': Majors.collegeOfCulturalHeritageAndInformationManagement,
  '38': Majors.collegeOfTranslationalMedicine,
  '39': Majors.collegeOfLisbon,
  '00': Majors.collegeUniversal,
};

export function getLessonCollegeOrMajor(lessonCode: string, type: 'college' | 'major'): string {
  const search = Object.entries(colleges).map(([collegeCode, college]) => {
    if (lessonCode.startsWith(collegeCode) || collegeCode === '00') {
      if (college instanceof Array) {
        for (const col of college)
          if (Object.entries(col).some(([majorCode]) => lessonCode.substring(2, 4) === majorCode))
            return type === 'college' ? col.self : col[lessonCode.substring(2, 4)] || '';
      } else return type === 'college' ? college.self : college[lessonCode.substring(2, 4)] || '';
    }
    return '';
  });
  for (const result of search) {
    if (result !== '') {
      return result;
    }
  }
  return '';
}
