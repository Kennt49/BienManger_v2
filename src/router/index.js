import { createRouter, createWebHistory } from 'vue-router'

import retourDataView from '@/views/retourDataView'
import RecetteUniqView from '@/views/RecetteUniqView'
import ajoutView from '@/views/ajoutView'
import supprimerView from '@/views/SupprimerView'

const routes = [

  {
    path: '/retourData',
    name: 'retourData',
    component: retourDataView
  },
  {
    path: '/recetteUniq',
    name: 'recetteUniq',
    component: RecetteUniqView
  },
  {
    path: '/recette',
    name: 'recette',
    component: ajoutView
  },
  {
    path: '/supprimer',
    name: 'supprimer',
    component: supprimerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
