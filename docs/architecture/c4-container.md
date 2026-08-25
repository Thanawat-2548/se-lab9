# C4 Level 2 — Container diagram (Mermaid)
 
## Overview
เอกสารแสดงแผนผังคอนเทนเนอร์ระดับที่ 2 (Container Diagram) ของระบบ **Platform StudySphere** ตามมาตรฐาน C4 Model เพื่อแสดงส่วนประกอบซอฟต์แวร์หลัก (Containers) เทคโนโลยีที่ใช้ และการเชื่อมต่อระหว่างกัน
 
---
 
## Mermaid Diagram
 
```mermaid
flowchart TD
    %% User
    User["<b>Alex (User)</b><br/>[Person]<br/>ผู้ใช้งานระบบ"]
 
    %% System Boundary: Platform StudySphere
    subgraph Platform ["Platform StudySphere"]
        direction TB
        App["<b>Application</b><br/>[Container: React]<br/>ส่วนแสดงผลแอปพลิเคชัน"]
        Backend["<b>API Backend</b><br/>[Container: Spring Boot]<br/>ระบบประมวลผลหลักและให้บริการ REST API"]
        DB["<b>Database</b><br/>[Container: Database]<br/>ฐานข้อมูลระบบ"]
        Notif["<b>Notifications</b><br/>[Container: Service/Component]<br/>ระบบจัดการการแจ้งเตือน"]
    end
 
    %% External Systems
    subgraph External ["External Systems"]
        LMS["<b>API LMS ของมหาวิทยาลัย</b><br/>[External System]"]
        GCal["<b>Google Calendar API</b><br/>[External System]"]
    end
 
    %% Relationships
    User -->|"Use StudySphere Platform"| App
    App -->|"REST API"| Backend
    Backend --> DB
    Backend --> Notif
    DB --> LMS
    Notif --> GCal
 
    %% Styling
    classDef userStyle fill:#e8f4f8,stroke:#29b6f6,stroke-width:2px,color:#01579b;
    classDef containerStyle fill:#fff3e0,stroke:#ff9800,stroke-width:2px,color:#e65100;
    classDef extStyle fill:#f5f5f5,stroke:#78909c,stroke-width:2px,color:#37474f;
 
    class User userStyle;
    class App,Backend,DB,Notif containerStyle;
    class LMS,GCal extStyle;