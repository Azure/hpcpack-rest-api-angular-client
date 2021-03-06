/**
 * HPC Pack REST API 2019
 * This is the API spec for Microsoft HPC Pack 2019.
 *
 * OpenAPI spec version: 2020-01-01.6.0
 * Contact: hpcpack@microsoft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface OperationLogEntry { 
    Message?: string;
    Severity?: OperationLogEntry.SeverityEnum;
    Source?: string;
    CreateTime?: Date;
}
export namespace OperationLogEntry {
    export type SeverityEnum = 'Error' | 'Warning' | 'Information' | 'Trace';
    export const SeverityEnum = {
        Error: 'Error' as SeverityEnum,
        Warning: 'Warning' as SeverityEnum,
        Information: 'Information' as SeverityEnum,
        Trace: 'Trace' as SeverityEnum
    };
}
