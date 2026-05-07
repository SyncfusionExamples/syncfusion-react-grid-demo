import { useState, useCallback } from 'react';
import { Grid, Columns, Column, ScrollMode, type PageSettings, type VirtualizationSettings, TextAlign, ClipMode, type ColumnTemplateProps } from '@syncfusion/react-grid';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/react-data';
import styles from '../app/styles/data-source-grid.module.css';
import { Skeleton } from '@syncfusion/react-notifications';
import '../app/styles/data-source-grid.css';
type EmployeeServerData = {
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Mail: string;
  Address: string;
  Location: string;
  Status: string;
  Trustworthiness: string;
  Software: number;
  Rating: number;
  CurrentSalary: number;
};
export default function DataSourceGrid() {
  const totalRecords = 100000;
  const pageSize = 50;

  // Initializes DataManager with UrlAdaptor and service URL.
  const data = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
  });

  // pageSettings: enables server-side pagination (50 records per page)
  const [pageSettings] = useState<PageSettings>({
    pageSize: pageSize
  });

  // virtualizationSettings: enables virtual scrolling for efficient rendering of large server-side datasets
  const [virtualizationSettings] = useState<VirtualizationSettings>({
    enabled: true,
    scrollMode: ScrollMode.Virtual,
    enableCache: true,
    viewPortBuffer: { rows: 5, columns: 5 }
  });
  const [query] = useState<Query>(new Query().addParams('dataCount', totalRecords.toString()));

  // Template functions for employee data display
  const employeeIdTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => (
    <div className={styles.iconWrapper} style={{ justifyContent: 'flex-end' }}>
      {args.data ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg> : <Skeleton width={'13px'} height={'10px'} />}
      {args.data ? <span>{args.data?.EmployeeID}</span> : <Skeleton width={'100%'} height={'10px'} />}
    </div>
  ), []);

  const employeeNameTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => (
    <div className={styles.iconWrapper}>
      {args.data ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg> : <Skeleton width={'12px'} height={'10px'} />}
      {args.data ? <span className={styles.textEllipsis}>{args.data?.Employees}</span> : <Skeleton width={'100%'} height={'10px'} />}
    </div>
  ), []);;

  const designationTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => (
    <div className={styles.iconWrapper}>
      {args.data ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg> : <Skeleton width={'20px'} height={'10px'} />}
      {args.data ? <span className={styles.textEllipsis}>{args.data?.Designation}</span> : <Skeleton width={'100%'} height={'10px'} />}
    </div>
  ), []);

  const locationTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => (
    <div className={styles.iconWrapper} style={{ justifyContent: 'center' }}>
      {args.data ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg> : <Skeleton width={'12px'} height={'10px'} />}
      {args.data ? <span className={styles.textEllipsis}>{args.data?.Location}</span> : <Skeleton width={'100%'} height={'10px'} />}
    </div>
  ), []);

  const statusTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => {
    const statusConfig: { [key: string]: { className: string; icon: string } } = {
      'Active': { className: styles.statusActive, icon: '●' },
      'Inactive': { className: styles.statusInactive, icon: '○' },
      'On Leave': { className: styles.statusOnLeave, icon: '⊘' },
      'Retired': { className: styles.statusRetired, icon: '✕' }
    };
    const config = statusConfig[args.data?.Status] || statusConfig['Active'];
    return (
      <div className={`${styles.statusBadge} ${config.className}`}>
        {args.data ? <span>{config.icon}</span> : <Skeleton width={'10px'} height={'10px'} />}
        {args.data ? <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '14px' }}>{args.data?.Status}</span> : <Skeleton width={'100%'} height={'10px'} />}
      </div>
    );
  }, []);

  const salaryTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => {
    const salary = args.data?.CurrentSalary || 0;
    const formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(salary);
    return <>
      {args.data ? <span className={styles.salaryText}>{formattedSalary}</span> : <Skeleton width={'100%'} height={'10px'} />}
    </>;
  }, []);

  const trustworthinessTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => {
    const trustLevel = args.data?.Trustworthiness || 'Unknown';
    const config: { [key: string]: { className: string } } = {
      'High': { className: styles.trustHigh },
      'Medium': { className: styles.trustMedium },
      'Low': { className: styles.trustLow }
    };
    const className = config[trustLevel] ? config[trustLevel].className : styles.trustDefault;

    return (
      <div className={`${styles.trustworthinessBadge} ${className}`}>
        {args.data ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg> : <Skeleton width={'11px'} height={'10px'} />}
        {args.data ? <span>{trustLevel}</span> : <Skeleton width={'100%'} height={'10px'} />}
      </div>
    );
  }, []);

  const softwareSkillsTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => {
    let skills = Number(args.data?.Software ?? 0);
    skills = Math.min(100, Math.max(0, skills));

    if (args.data?.Trustworthiness === 'Perfect') {
      if (skills < 70) skills = 70;
    } else if (args.data?.Trustworthiness === 'Sufficient') {
      if (skills < 40) skills = 40;
      if (skills > 69) skills = 69;
    } else if (args.data?.Trustworthiness === 'Insufficient') {
      if (skills > 39) skills = 39;
      if (skills < 0) skills = 0;
    }

    const displaySkills = Math.round(skills);
    const color = displaySkills < 40 ? '#dc2626' : displaySkills < 70 ? '#f59e0b' : '#059669';

    return (
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${displaySkills}%`, backgroundColor: color }} />
        </div>
        {args.data ? <span className={styles.progressText}>{displaySkills}%</span> : <Skeleton width={'100%'} height={'10px'} />}
      </div>
    );
  }, []);

  const performanceRatingTemplate = useCallback((args: ColumnTemplateProps<EmployeeServerData>) => {
    let rating = Number(args.data?.Rating ?? 0);
    rating = Math.min(5, Math.max(0, rating));

    if (args.data?.Trustworthiness === 'Perfect') {
      if (rating < 4) rating = 4;
      if (rating > 5) rating = 5;
    } else if (args.data?.Trustworthiness === 'Sufficient') {
      rating = 3;
    } else if (args.data?.Trustworthiness === 'Insufficient') {
      if (rating < 1) rating = 1;
      if (rating > 2) rating = 2;
    }

    const color = rating >= 4 ? '#059669' : rating >= 3 ? '#f59e0b' : '#dc2626';

    return (
      <div className={styles.iconWrapper} style={{ justifyContent: 'center' }}>
        {args.data ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.61 19.64 24.87 12 19.52 4.36 24.87 6.45 16.61 0 10.26 8.91 10.26" />
        </svg> : <Skeleton width={'11px'} height={'10px'} />}
        {args.data ? <span className={`${styles.ratingText} ${rating >= 4 ? styles.ratingHigh : rating >= 3 ? styles.ratingMedium : styles.ratingLow}`}>{rating.toFixed(1)}</span> : <Skeleton width={'100%'} height={'10px'} />}
      </div>
    );
  }, []);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
      <Grid<EmployeeServerData>
        dataSource={data}
        height={'100%'}
        virtualizationSettings={virtualizationSettings}
        pageSettings={pageSettings}
        query={query}
        clipMode={ClipMode.EllipsisWithTooltip}
      >
        <Columns>
          {/* Identifier Column */}
          <Column field="EmployeeID" headerText="Employee ID" width='110px' textAlign={TextAlign.Right} type='number' template={employeeIdTemplate} />

          {/* Personal Information */}
          <Column field="Employees" headerText="Employee Name" width='160px' textAlign={TextAlign.Left} clipMode={ClipMode.EllipsisWithTooltip} template={employeeNameTemplate} />
          <Column field="Designation" headerText="Designation" width='130px' textAlign={TextAlign.Left} clipMode={ClipMode.EllipsisWithTooltip} template={designationTemplate} />
          <Column field="Mail" headerText="Email" width='180px' textAlign={TextAlign.Left} clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field="Address" headerText="Address" width='180px' textAlign={TextAlign.Left} clipMode={ClipMode.EllipsisWithTooltip} />

          {/* Organizational & Status */}
          <Column field="Location" headerText="Location" width='120px' textAlign={TextAlign.Center} clipMode={ClipMode.EllipsisWithTooltip} template={locationTemplate} />
          <Column field="Status" headerText="Status" width='110px' textAlign={TextAlign.Center} clipMode={ClipMode.EllipsisWithTooltip} template={statusTemplate} />
          <Column field="Trustworthiness" headerText="Trustworthiness" width='130px' textAlign={TextAlign.Center} clipMode={ClipMode.EllipsisWithTooltip} template={trustworthinessTemplate} />

          {/* Performance & Compensation */}
          <Column field="Software" headerText="Software Skills" width='120px' textAlign={TextAlign.Right} type='number' template={softwareSkillsTemplate} />
          <Column field="Rating" headerText="Performance Rating" width='130px' textAlign={TextAlign.Center} type='number' template={performanceRatingTemplate} />
          <Column field="CurrentSalary" headerText="Current Salary" width='130px' textAlign={TextAlign.Right} type='number' template={salaryTemplate} />
        </Columns>
      </Grid>
    </div>
  );
}