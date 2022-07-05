import { UIState } from "./";

type UI_TYPE = 
| { type: 'UI - Open Sidebar'}
| { type: 'UI - Close Sidebar'}


export const uiReducer = ( state: UIState, action: UI_TYPE) => {

    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state,
                sideMenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }
    
        default:
            return state;
    }

}