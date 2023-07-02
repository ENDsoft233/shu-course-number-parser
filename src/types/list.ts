/**
 * A list of colleges and majors
 */
export interface QueryList {
  /**
   * The name of the college or major
   */
  name: string;
  /**
   * The regex to match the code of the college or major
   */
  regex: RegExp;
}

/**
 * A list of properties with code
 */
export interface QueryListWithCode extends QueryList {
  code: string;
}
