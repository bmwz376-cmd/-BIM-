---
title: Structure Check - BIM Recipe
description: Structural interference check using BIM models
tags:
  - BIM Application
  - Structure
  - Clash Detection
---

# Structure Check - BIM Recipe

## 📋 Overview

Check interference and fit of structural members (columns, beams, slabs) using BIM

- **Purpose**: Detect interference between structural members in advance and ensure constructability
- **Phase**: After shop drawing creation, before formwork construction
- **Person in charge**: General contractor (construction management) + structural subcontractor
- **Time required**: 2-4 hours per floor

## 🔍 Prerequisites (Shop Drawing Knowledge)

!!! warning "Shop Drawing Understanding is Essential"
    The following shop drawing knowledge is required:

- **Structural shop drawing**: Detailed drawings showing positions and dimensions of structural members
- **Column, beam, slab**: Main structural members
- **Formwork**: Temporary molds for pouring concrete
- **Rebar**: Steel bars embedded in concrete for reinforcement
- **Slab thickness**: Thickness of floors/roofs
- **Interference**: When members overlap or collide

## 📊 Illustrations

<div class="image-wrapper">
  <img src="../../assets/images/pdfs/施工BIM③/page_007.png" alt="Structure check example" class="zoomable">
  <p class="caption">Figure 1: Structural interference check in BIM model (Source: Construction BIM③)</p>
</div>

## 👨‍🏫 5 Points Instructors Must Mention

<div class="instructor-checklist">

### 1️⃣ Phase
After structural shop drawing approval, before formwork construction (fixes before construction start)

### 2️⃣ Whose Job
- **General contractor**: Execute clash detection, hold coordination meetings
- **Structural subcontractor**: Consider constructability, judgment on formwork assembly
- **Rebar subcontractor**: Consider rebar placement

### 3️⃣ What to Determine
- Presence of structural interference
- Formwork assembly sequence
- Space for rebar placement
- Constructability of complex shapes

### 4️⃣ Relationship with Shop Drawings
- **Structural shop drawing**: Obtain member positions and dimensions
- **Rebar shop drawing**: Check rebar arrangement space
- **Formwork plan**: Verify formwork assembly sequence

### 5️⃣ What Happens If Not Done
- Formwork cannot be assembled on site
- Concrete cannot be poured
- Major rework after concrete pouring
- Significant schedule delays (weeks~months)

</div>

## 🚀 Implementation Steps

### Step 1: Create Structural BIM Model
```mermaid
graph LR
    A[Check shop drawings] --> B[Place columns in BIM]
    B --> C[Place beams]
    C --> D[Place slabs]
    D --> E[Set accurate dimensions]
```

1. **Read structural shop drawings**
   - Member positions (grid lines)
   - Member dimensions (column/beam cross-sections, slab thickness)
   - Opening positions (windows, doors)

2. **Place members in BIM**
   - Columns → Beams → Slabs in order
   - Set accurate dimensions (millimeter precision)

### Step 2: Execute Clash Detection

<div class="step-box">

**Check items**:

- ✅ Interference between structural members (beam-to-beam, column-to-beam)
- ✅ Complex shapes (curved walls, inclined members)
- ✅ Opening positions (windows, doors)
- ✅ Formwork assembly space
- ✅ Rebar placement space

</div>

### Step 3: Classify Problems and Solutions

| Clash Level | Situation | Solution |
|------------|-----------|----------|
| 🔴 Critical | Members physically interfere, construction impossible | Design change required |
| 🟡 Moderate | Construction difficult, may affect quality | Change construction sequence, adjust formwork plan |
| 🟢 Minor | Constructible but requires attention | Document as construction notes |

### Step 4: Hold Coordination Meeting

- **Participants**: General contractor, structural contractor, rebar contractor, designer (if needed)
- **Agenda**: Solutions for interference, approval of modifications
- **Deliverables**: Updated shop drawings, construction procedure manuals

## 💡 Instructor Notes

### Teaching Tips
1. **Emphasize "3D thinking for structure"**
   - 2D drawings don't show all interferences
   - Complex joints are especially prone to issues

2. **Explain constructability**
   - Not just "no interference" but "can it be built?"
   - Consider formwork assembly sequence

3. **Use actual failure cases**
   - Show photos of "problems found on site"
   - Explain "if BIM check had been done..."

### Common Questions & Answers

**Q: Do we need to model all structural members in BIM?**

A: No. Start with complex areas (column-beam joints, curved sections). Full modeling takes too much time.

**Q: What if clashes are detected?**

A: Most can be resolved by adjusting construction sequence or formwork plans. Design changes are only needed for structural safety issues.

**Q: Who creates the structural BIM model?**

A: Usually the general contractor's BIM operator, but sometimes the structural subcontractor. Ability to accurately read shop drawings is essential.

## ❓ Quiz

<div class="quiz" data-quiz-id="structure-check">

### Q1: What is the primary purpose of structural checks?

- [ ] A. To make drawings look nice
- [x] B. To detect structural interference in advance
- [ ] C. To reduce construction costs
- [ ] D. To create 3D visualizations

**Explanation**: The main purpose is to detect structural interference before construction and ensure constructability.

### Q2: When should structural checks be performed?

- [x] A. After shop drawing creation, before formwork construction
- [ ] B. After formwork construction
- [ ] C. After concrete pouring
- [ ] D. Anytime is fine

**Explanation**: Must be done before formwork construction. Post-construction fixes are very costly.

### Q3: What are the "5 Points" instructors must mention?

- [ ] A. Phase, person, budget, schedule, quality
- [x] B. Phase, whose job, what to determine, relationship with shop drawings, consequences if not done
- [ ] C. Phase, method, tools, cost, effect
- [ ] D. Phase, location, time, participants, results

**Explanation**: The 5 points are: phase, whose job, what to determine, relationship with shop drawings, consequences if not done.

### Q4: What happens if structural interference is found after concrete pouring?

- [ ] A. Just drill holes
- [ ] B. No problem, can fix later
- [x] C. Very costly rework, possibly requiring structural reinforcement
- [ ] D. Nothing happens

**Explanation**: Post-concrete fixes are very expensive and may require structural reinforcement.

### Q5: The optimal LOD for structural BIM models during construction is?

- [ ] A. LOD 100
- [ ] B. LOD 200
- [x] C. LOD 300-400
- [ ] D. LOD 500

**Explanation**: LOD 300-400 is suitable for construction stage. LOD 100-200 is too rough, LOD 500 is too detailed.

</div>

## 🔗 Related Pages

- [Sleeve Check](sleeve-check.md) - Check MEP penetrations
- [Rebar Coordination](rebar-coordination.md) - Check rebar fit
- [Shop Drawing Basics](../../shop-drawing/index.md) - Learn to read shop drawings

## 📚 References

- Architectural Standard Specification (JASS 5 Reinforced Concrete Work)
- BIM Utilization Guidelines (Ministry of Land, Infrastructure, Transport and Tourism)
