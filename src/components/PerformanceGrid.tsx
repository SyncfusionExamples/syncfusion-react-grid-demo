import { useState, useCallback } from 'react';
import { Grid, Columns, Column, TextAlign, ClipMode, type ColumnTemplateProps, type SortSettings, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type EmployeeData, generateEmployeeData } from '@/app/models/employeeListData';
import styles from '@/app/styles/performance-grid.module.css';

export default function PerformanceGrid() {
  const [data] = useState(() => generateEmployeeData());

  const [gridHeight] = useState('100%');
  const [gridWidth] = useState(100);

  // sortSettings: enables multi-column sorting for arranging data
  const [sortSettings] = useState<SortSettings>({enabled: true});

  // virtualizationSettings: enables row virtualization for efficient rendering of large datasets
  const [virtualizationSettings] = useState({ type: VirtualDomType.Row });

  // Template functions for real-world employee data display
  const employeeIdTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.EmployeeID}</span>
    </div>
  ), []);

  const fullNameTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.FullName}</span>
    </div>
  ), []);

  const departmentTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={`${styles.badge} ${styles.departmentBadge}`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span>{args.data.Department}</span>
    </div>
  ), []);

  const statusTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const statusConfig: { [key: string]: { className: string; icon: string } } = {
      'Active': { className: styles.statusActive, icon: '✓' },
      'On Leave': { className: styles.statusOnLeave, icon: '⏸' },
      'Inactive': { className: styles.statusInactive, icon: '○' }
    };
    const config = statusConfig[args.data.Status] || statusConfig['Inactive'];
    return (
      <div className={`${styles.statusBadgeBg} ${config.className}`}>
        <span style={{ fontSize: '14px' }}>{config.icon}</span>
        <span>{args.data.Status}</span>
      </div>
    );
  }, []);

  const positionTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Position}</span>
    </div>
  ), []);

  const hireDateTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper} style={{ justifyContent: 'flex-end' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.HireDate}</span>
    </div>
  ), []);

  const salaryTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <span className={styles.salaryText}>$ {parseFloat(args.data.Salary).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
  ), []);

  const performanceRatingTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const rating = parseFloat(args.data.PerformanceRating);
    const ratingClass = rating >= 4 ? styles.ratingHigh : rating >= 3 ? styles.ratingMedium : styles.ratingLow;
    const color = rating >= 4 ? '#059669' : rating >= 3 ? '#f59e0b' : '#dc2626';
    
    return (
      <div className={styles.ratingContainer}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
          <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.61 19.64 24.87 12 19.52 4.36 24.87 6.45 16.61 0 10.26 8.91 10.26"/>
        </svg>
        <span className={ratingClass}>{rating.toFixed(1)}</span>
      </div>
    );
  }, []);

  const emailTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7.5L22 6"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Email}</span>
    </div>
  ), []);

  const phoneTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper + ' ' + styles.phone}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Phone}</span>
    </div>
  ), []);

  const employmentTypeTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const typeConfig: { [key: string]: string } = {
      'Full-time': styles.employmentFullTime,
      'Part-time': styles.employmentPartTime,
      'Contract': styles.employmentContract,
      'Intern': styles.employmentIntern
    };
    const badgeClass = typeConfig[args.data.EmploymentType] || styles.employmentDefault;
    
    return (
      <div className={`${styles.employmentBadge} ${badgeClass}`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <span>{args.data.EmploymentType}</span>
      </div>
    );
  }, []);

  const reportsToTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.ReportsTo}</span>
    </div>
  ), []);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
      <Grid<EmployeeData>
        dataSource={data}
        height={gridHeight}
        width={`${gridWidth}%`}
        clipMode={ClipMode.EllipsisWithTooltip}
        virtualizationSettings={virtualizationSettings}
        sortSettings={sortSettings}
      >
        <Columns>
          <Column field='EmployeeID' headerText='Employee ID' width='150px' textAlign={TextAlign.Left} template={employeeIdTemplate} />
          <Column field='FullName' headerText='Full Name' width='120px' textAlign={TextAlign.Left} template={fullNameTemplate} />
          <Column field='Email' headerText='Email' width='215px' textAlign={TextAlign.Left} template={emailTemplate} />
          <Column field='Phone' headerText='Phone' width='110px' textAlign={TextAlign.Right} template={phoneTemplate} />
          <Column field='Department' headerText='Department' width='130px' textAlign={TextAlign.Center} template={departmentTemplate} />
          <Column field='Position' headerText='Position' width='110px'  template={positionTemplate} />
          <Column field='EmploymentType' headerText='Employment Type' width='140px' textAlign={TextAlign.Center} template={employmentTypeTemplate} />
          <Column field='Status' headerText='Status' width='110px' textAlign={TextAlign.Center} template={statusTemplate} />
          <Column field='HireDate' headerText='Hire Date' width='120px' textAlign={TextAlign.Right} template={hireDateTemplate} type={ColumnType.Date} />
          <Column field='ReportsTo' headerText='Reports To' width='120px' textAlign={TextAlign.Left} template={reportsToTemplate} />
          <Column field='Salary' headerText='Salary' width='110px' textAlign={TextAlign.Right} template={salaryTemplate} />
          <Column field='PerformanceRating' headerText='Impact Rating' width='130px' textAlign={TextAlign.Center} template={performanceRatingTemplate} />
        </Columns>
      </Grid>
    </div>
  );
}
