import React, { memo } from 'react'
import { ExternalLink, Github, Globe, Award, Clock, Building } from 'lucide-react'

const ProjectCard = memo(({ project }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web Application':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Full Stack':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Design':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'Blockchain':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getStatusBadge = () => {
    if (project.hackathon) {
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs rounded-full">
          <Award className="w-3 h-3" />
          Hackathon
        </div>
      )
    }
    if (project.freelance) {
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs rounded-full">
          <Building className="w-3 h-3" />
          Freelance
        </div>
      )
    }
    if (project.ongoing) {
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs rounded-full">
          <Clock className="w-3 h-3" />
          Ongoing
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600 overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-600 dark:to-dark-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {project.featured && (
            <div className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-400 text-xs rounded-full font-medium">
              Featured
            </div>
          )}
          {getStatusBadge()}
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-dark-800/90 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
          {project.year}
        </div>

        {/* Tech Stack Preview */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/90 dark:bg-dark-800/90 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 bg-white/90 dark:bg-dark-800/90 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200 text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
          )}

          {!project.githubUrl && !project.liveUrl && (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-medium">
              <ExternalLink className="w-4 h-4" />
              Details Only
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
