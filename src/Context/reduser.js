import {Action_Types as actions} from './ActionsTypes';
import { initialstate } from './Context';

export const reduser = (state = initialstate,action) => {
    switch (action.type) {
        case actions.ADD_JOB :
            return {
                ...state,
                jobs:[...state.jobs,action.job]
            }
            case actions.FILTER_JOBS_BYTIME :
                return {
                    ...state,
                    jobs: state.jobs.filter((job) => {return  job.hour !== action.filterby})
                } 
            case actions.FILTER_JOBS_BYCITY :
                return {
                    ...state,
                    jobs: state.jobs.filter((job) => {return  job.city !== action.filterby})
                } 
            case actions.FILTER_JOBS_BYSEARCH :
                return {
                    ...state,
                    jobs: state.jobs.filter((job) => {return  job.name === action.search})
                } 
            case actions.ADD_USER :
                return {
                    ...state,
                    users : [...state.users,action.user]
                }    
            case actions.LOGOUT :
                return {
                    ...state,
                    users : []
                }    
            case actions.ADD_NEW_EMPLOYEE :
                return {
                    ...state,
                    employees:[...state.employees,action.employee]
                }    
            case actions.REMOVE_FROM_EMPLOYEES :
                return {
                    ...state,
                    employees: state.employees.filter((item) =>  item !== action.employee),
                } 
            default :
            return state
    }
}
