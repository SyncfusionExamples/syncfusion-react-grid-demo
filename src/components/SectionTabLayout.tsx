import { useState } from 'react'
import { CodeViewIcon, DescriptionIcon, EyeIcon, ListUnorderedIcon, CopyIcon } from '@syncfusion/react-icons';
import '@/app/styles/material-interaction-theme.css';

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
    <div className="fixed top-14 left-0 right-0 bottom-0 flex flex-col" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", background: '#FAFAFA' }}>

      {/* Main Content Area */}
      <div className="flex" style={{height: 'calc(100vh - 56px)', padding: '16px', gap: '16px'}}>
        {/* Vertical Tabs Sidebar - Material Design */}
        <div className="flex flex-col gap-1 flex-shrink-0" style={{width: '200px', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)', padding: '8px', overflow: 'auto'}}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 transition-colors duration-150 text-left border-l-4 font-medium rounded-r-lg md3-tab-description ${
                activeTab === tab.id
                  ? 'md3-state-selected bg-opacity-8 text-primary border-l-primary'
                  : 'md3-state-default text-on-surface border-l-transparent hover:bg-surface'
              }`}
              // className={`md3-tab-description ${activeTab === tab.id ? 'md3-state-selected' : 'md3-state-default'}`}
              style={{ 
                fontSize: '14px', 
                fontWeight: 500,
                letterSpacing: '0.25px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                borderRadius: '8px',
                width: '100%',
                textAlign: 'left',
                transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
              }}
              title={tab.label}
            > 
              {tabIcons[tab.id]}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content with Scrolling - Dialog-like appearance */}
        <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)' }}>
          {getTabContent()}
        </div>
      </div>
    </div>
  )
}
