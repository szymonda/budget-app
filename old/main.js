import GSheetReader from 'g-sheet-api';
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_/pubhtml
//2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_
const options = {
   sheetId: '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg',
   returnAllResults: false,
   filter: {
      'department': 'archaeology'
   }
}

GSheetReader(options, results => {
   // do something with the results here
   console.log(results);
});