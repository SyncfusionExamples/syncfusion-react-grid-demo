import { useState } from 'react'
import { CodeViewIcon, DescriptionIcon, EyeIcon, ListUnorderedIcon, CopyIcon } from '@syncfusion/react-icons';

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

const tabIcons: Record<TabType, React.ReactNode> = {
  description: <DescriptionIcon />,
  steps: <ListUnorderedIcon />,
  sample: <EyeIcon />,
  code: <CodeViewIcon />,
}

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
    <div className="fixed top-14 left-0 right-0 bottom-0 bg-gray-50 flex flex-col" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", background: '#F5F5F5' }}>

      {/* Main Content Area */}
      <div className="flex" style={{height: 'calc(100vh - 56px)'}}>
        {/* Vertical Tabs Sidebar - Material Design */}
        <div className="w-32 bg-white py-2 flex flex-col gap-0 flex-shrink-0" style={{width: '15%', backgroundColor: '#FAFAFA', borderRight: 'none', margin: '16px 0px 16px 16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)'}}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 transition-colors duration-150 text-left border-l-4 font-medium rounded-r-lg ${
                activeTab === tab.id
                  ? 'bg-opacity-8 text-primary border-l-primary'
                  : 'text-on-surface border-l-transparent hover:bg-surface'
              }`}
              style={{ 
                fontSize: '14px', 
                fontWeight: 500,
                backgroundColor: activeTab === tab.id ? 'rgba(103, 80, 164, 0.12)' : 'transparent',
                letterSpacing: '0.25px',
                marginRight: '8px',
                marginBottom: '4px',
              }}
              title={tab.label}
            > 
              <div className="flex items-center gap-2">
                {tabIcons[tab.id]}
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content with Scrolling - Dialog-like appearance */}
        <div className="flex-1 px-6 py-4 overflow-y-auto" style={{ background: '#FFFFFF', margin: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' }}>
          {getTabContent()}
        </div>
      </div>
    </div>
  )
}
