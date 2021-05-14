const getScoreColor = (score: number) : 'success' | 'warning' | 'error' => {
  if(score < 4) return 'error'
  if(score < 7) return 'warning'
  return 'success'
}

const styler = {
  getScoreColor,
}

export default styler