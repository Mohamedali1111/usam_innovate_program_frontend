import React, { memo } from 'react'

const SkillItem = memo(({ skill }) => {
  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-green-500'
    if (proficiency >= 80) return 'bg-blue-500'
    if (proficiency >= 70) return 'bg-yellow-500'
    if (proficiency >= 60) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getProficiencyText = (proficiency) => {
    if (proficiency >= 90) return 'Expert'
    if (proficiency >= 80) return 'Advanced'
    if (proficiency >= 70) return 'Intermediate'
    if (proficiency >= 60) return 'Beginner'
    return 'Novice'
  }

  const getProficiencyTextColor = (proficiency) => {
    if (proficiency >= 90) return 'text-green-600 dark:text-green-400'
    if (proficiency >= 80) return 'text-blue-600 dark:text-blue-400'
    if (proficiency >= 70) return 'text-yellow-600 dark:text-yellow-400'
    if (proficiency >= 60) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
  }

  return (
    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 border border-gray-200 dark:border-dark-600 hover:shadow-lg transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {skill.name}
        </h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getProficiencyTextColor(skill.proficiency)} bg-opacity-10`}>
          {getProficiencyText(skill.proficiency)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        {skill.description}
      </p>

      {/* Category */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
          {skill.category}
        </span>
      </div>

      {/* Proficiency Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
          <span className={`font-semibold ${getProficiencyTextColor(skill.proficiency)}`}>
            {skill.proficiency}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${getProficiencyColor(skill.proficiency)}`}
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-600">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>Skill Level</span>
          <span className={`font-medium ${getProficiencyTextColor(skill.proficiency)}`}>
            {skill.proficiency >= 90 ? '🚀 Expert' : 
             skill.proficiency >= 80 ? '⚡ Advanced' : 
             skill.proficiency >= 70 ? '🔥 Intermediate' : 
             skill.proficiency >= 60 ? '📚 Beginner' : '🌱 Novice'}
          </span>
        </div>
      </div>
    </div>
  )
})

SkillItem.displayName = 'SkillItem'

export default SkillItem
