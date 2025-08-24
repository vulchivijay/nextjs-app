import styles from './full-width-pages.module.css'

export default function FullWidthPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className={`${styles.fullwidthpage}`}>{children}</div>;
}
