# C4 Level 1 — System Context diagram (Mermaid)
 
## Overview

เอกสารแสดงแผนผังระบบสถาปัตยกรรมระดับที่ 1 (System Context Diagram) ของระบบ **CampusLink** ตามมาตรฐาน C4 Model เพื่อแสดงการปฏิสัมพันธ์ระหว่างผู้ใช้งาน (Users), ระบบหลัก (System), และระบบภายนอก (External Systems)
 
---
 
## Mermaid Diagram
 
```mermaid

flowchart TD

    %% Personas / Users

    subgraph Users ["Users (ผู้ใช้งาน)"]

        EO["<b>Event Organizer</b><br/>(ผู้จัดกิจกรรม)"]

        GS["<b>General Student</b><br/>(นักศึกษาทั่วไป)"]

    end
 
    %% Main System

    subgraph MainSystem ["System (ระบบหลัก)"]

        CL["<b>CampusLink</b><br/>แพลตฟอร์มชุมชนออนไลน์ของนักศึกษาและเน้น<br/>เรื่องความปลอดภัยผ่านการยืนยันตัวตนด้วยอีเมลมหาวิทยาลัย"]

    end
 
    %% External Systems

    subgraph ExternalSystems ["External Systems (ระบบภายนอก)"]

        IdP["<b>University Identity Provider (IdP)</b>"]

        FCM["<b>Firebase Cloud Messaging (FCM)</b>"]

    end
 
    %% Relationships

    EO -->|"สร้างกิจกรรม, โปรโมตงาน<br/>และดูสถิติผู้เข้าร่วม"| CL

    GS -->|"ดูประกาศข่าวสาร, นัดเล่นกีฬา<br/>และซื้อขายสินค้ามือสอง"| CL

    CL -->|"ส่งข้อมูลเพื่อยืนยันตัวตน<br/>ด้วยอีเมลมหาวิทยาลัย"| IdP

    CL -->|"ส่งข้อมูลการแจ้งเตือนเพื่อยิง<br/>ไปยังมือถือผู้ใช้"| FCM
 
    %% Styling

    classDef userStyle fill:#e8f4f8,stroke:#29b6f6,stroke-width:2px,color:#01579b;

    classDef systemStyle fill:#ffebee,stroke:#ef5350,stroke-width:2px,color:#c62828;

    classDef extStyle fill:#f5f5f5,stroke:#78909c,stroke-width:2px,color:#37474f;
 
    class EO,GS userStyle;

    class CL systemStyle;

    class IdP,FCM extStyle;
 