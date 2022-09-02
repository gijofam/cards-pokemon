import React from 'react'

const BarStats = ({stat}) => {

  const calcStats = () => {
    const datoStat= stat['base_stat'];
    let result = 0
    if(datoStat>=0&& datoStat<=16){
      result = 10
    }else if(datoStat>=17 && datoStat<=33){
      result = 20
    }else if(datoStat>=34 && datoStat<=48){
      result = 30
    }else if(datoStat>=49 && datoStat<=64){
      result = 40
    }else if(datoStat>=65 && datoStat<76){
      result = 50
    }else if(datoStat>=77 && datoStat<90){
      result = 60
    }else if(datoStat>=90 && datoStat<105){
      result = 70
    }else if(datoStat>=105 && datoStat<120){
      result = 80
    }else if(datoStat>=120 && datoStat<135){
      result = 90
    }else{
      result = 100
    }
    // (datoStat>=135 && datoStat<=150)
    return result
  }

  return (
    <div className='card__stats'>
      <p className='card__stats__info'>{stat['base_stat']}/150</p>
      <h3 className='card__stats__title'>{stat.stat.name}</h3>
      <div className='stats_bar_container'>
        <div className={`stats__bar bar__porcentaje${calcStats()}`}>{stat['base_stat']}</div>
        {/* <div className='stats__bar bar__porcentaje10'>{stat.base_stat}</div> */}
      </div>
    </div>
  )
}

export default BarStats