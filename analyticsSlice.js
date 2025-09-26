import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  summary: {
    roas: ['0.00%', '$6,109.89', '0.00%', '$2,101', '$2.91', '0', '$0.00']
  },
  trends: {
    labels: ['5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul', '10 Jul', '11 Jul'],
    data: [100, 300, 700, 500, 300, 200, 400]
  },
  topList: [
    { name: 'Discovery (LOC)', spend: 6109.89 },
    { name: 'Competitor (LOC)', spend: 6109.89 },
    { name: 'Today tab (LOC)', spend: 6109.89 },
    { name: 'Branding (LOC)', spend: 6109.89 }
  ]
}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {}
})

export default analyticsSlice.reducer
