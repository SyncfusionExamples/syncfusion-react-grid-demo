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

const tabs: { id: TabType; label: string }[] = [
  { id: 'description', label: 'Description' },
  { id: 'steps', label: 'Steps' },
  { id: 'sample', label: 'Sample' },
  { id: 'code', label: 'Code' },
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
    <div className="fixed top-12 left-0 right-0 bottom-0 bg-white flex flex-col" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>

      {/* Main Content Area */}
      <div className="flex" style={{height: 'calc(100vh - 46px)'}}>
        {/* Vertical Tabs Sidebar - Text Only */}
        <div className="w-32 bg-gray-50 border-r border-gray-200 py-2 flex flex-col gap-0 flex-shrink-0" style={{width: '15%'}}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 transition-colors duration-150 text-left border-l-4 ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-700 border-l-blue-600'
                  : 'text-gray-700 border-l-transparent hover:bg-gray-100'
              }`}
              style={{ fontSize: 'var(--fs-tab)', fontWeight: 500 }}
              title={tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content with Scrolling (single scroller) */}
        <div className="flex-1 bg-white px-6 py-4 overflow-y-auto" style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.05)', background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,255,0.98) 100%)' }}>
          {getTabContent()}
        </div>
      </div>
    </div>
  )
}
