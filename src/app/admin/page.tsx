"use client";
import React from "react";
// useRouter
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  router.push("/admin/dashboard");
};

export default AdminPage;
