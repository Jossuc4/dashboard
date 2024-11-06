import './professeur.css'
import React from 'react'
import Enseignements from './enseignements/Enseignements.jsx'
import Partage from './partage/Partage.jsx'
import Exercices from './exercices/Exercices.jsx'
import Publications from './publications/Publications.jsx'

const ProDashboard = ()=>{
    return (
        <>
            <div className='cadre'>
                <Exercices/>
                <Publications/>
                <Enseignements/>
                <Partage/>
            </div>
        </>
    )
}

export default ProDashboard