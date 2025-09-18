
interface CompanyState {
  company: string;
}

const initialState: CompanyState = {
  company: 'Rikkei Academy',
};

type Action = { type: 'CHANGE_COMPANY' };


const companyReducer = (state = initialState, action: Action): CompanyState => {

  switch (action.type) {
    case 'CHANGE_COMPANY':

      return { ...state, company: 'RikkeiSoft' };
    default:
        
      return state;
  }
};

export default companyReducer;
