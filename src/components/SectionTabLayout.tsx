import { useState } from 'react'

interface TabContentProps {
  description?: React.ReactNode
  steps?: React.ReactNode
  sample?: React.ReactNode
  code?: React.ReactNode
}

interface SectionTabLayoutProps {
  title: string
  subtitle: string
  badge: {
    text: string
    className: string
  }
  content: TabContentProps
}

type TabType = 'description' | 'steps' | 'sample' | 'code'

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: 'description', label: 'Description', icon: '📝' },
  { id: 'steps', label: 'Steps', icon: '👣' },
  { id: 'sample', label: 'Sample', icon: '▶️' },
  { id: 'code', label: 'Code', icon: '</>' },
]

export default function SectionTabLayout({
  title,
  subtitle,
  badge,
  content,
}: SectionTabLayoutProps) {
  const [activeTab, setActiveTab] = useState<TabType>('sample')

  const getTabContent = () => {
    switch (activeTab) {
      case 'description':
        return content.description
      case 'steps':
        return content.steps
      case 'sample':
        return content.sample
      case 'code':
        return content.code
      default:
        return null
    }
  }

  return (
    <div className="fixed top-12 left-0 right-0 bottom-0 bg-white overflow-hidden flex flex-col">
      {/* Ultra-Compact Header - Minimal Space */}
      <div className="px-3 py-1 flex-shrink-0 bg-white border-b border-gray-200 flex items-center gap-2 h-8">
        <div className={`inline-block ${badge.className} px-1.5 py-0 rounded text-xs font-600 flex-shrink-0`}>
          {badge.text}
        </div>
        <h1 className="text-base font-600 text-gray-900 truncate">{title}</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Vertical Tabs Sidebar - Wider for Better UX */}
        <div className="w-32 bg-gray-50 border-r border-gray-200 p-1 flex flex-col gap-0.5 overflow-y-auto flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-2 rounded text-xs font-500 transition-all duration-150 flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={tab.label}
            >
              <span className="text-sm flex-shrink-0">{tab.icon}</span>
              <span className="text-xs font-500">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content - Full Height with Optimized Padding */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white">
            <div className="p-3">
              {getTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
