import React from '../components/icons/React.astro'
import Python from '../components/icons/Python.astro'
import MongoDB from '../components/icons/MongoDB.astro'
import Qt from '../components/icons/Qt.astro'

export const TAGS = {
  REACT: {
    name: 'React',
    icon: React,
    class: 'text-white bg-'
  },
  PYTHON: {
    name: 'Python',
    icon: Python,
    class: 'text-sky-600 border-yellow-600',
  },
  MONGODB: {
    name: 'MongoDB',
    icon: MongoDB,
    class: 'text-green-600 border-green-600',
  },
  QT: {
    name: 'Qt',
    icon: Qt,
    class: 'text-white',
  },
}
