

const getAllFromLocalDB = () =>{
  const allCheckInData = localStorage.getItem('check-in')
  console.log(allCheckInData, 'all local list')
  if(allCheckInData) return JSON.parse(allCheckInData)

  return []
}

const addToLocalDB = (checkIns)=>{
  const allCheckIns = getAllFromLocalDB();
  allCheckIns.push(checkIns)
  localStorage.setItem('check-in', JSON.stringify(allCheckIns))
}

export {getAllFromLocalDB, addToLocalDB}