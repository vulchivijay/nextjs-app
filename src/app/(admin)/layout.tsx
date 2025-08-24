'use client'

// import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme";

import { useAuth } from "@/app/hooks/auth";
import { redirect } from "next/navigation";

import { Col, Row } from "react-bootstrap";

import DashboardHeader from "@/app/(admin)/components/header";
import styles from './dashboard/dashboard.module.css';
import Asidebar from "./components/asidebar";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Dashboard description",
// };

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider>
      <div className={styles.dashboardWrapper}>
        {isAuthenticated ? (
          <>
            <Row className="h-100">
              <Col xs='2' className="border-end">
                <Asidebar />
              </Col>
              <Col xs='10'>
                <Row>
                  <Col xs='12' className="border-bottom">
                    <DashboardHeader />
                  </Col>
                </Row>
                <Row>
                  <Col xs='12'>{children}</Col>
                </Row>
              </Col>
            </Row>
          </>
        ) : (
          <>{redirect('/')}</>
        )}
      </div>
    </ThemeProvider>);
}