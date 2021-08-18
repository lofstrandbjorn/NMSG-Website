---
title: Callout
media_order: log.png
image_align: right
visible: false
---

The **Logistics** module defines patterns used by federates to negotiate and deliver logistics simulation as a service during runtime. All the NETN logistics patterns use the concept of a service provider and a service consumer that are modelled in two different federates. The federates use the NETN logistics pattern to manage the service negotiation and delivery using HLA interactions and in some cases other NETN patterns such as NETN TMR.

The Logistics services include:

* **Supply** service provided by a facility, a unit or entity with consumable materials supply capability. Resources are transferred from the federate modelling the service provider to the federate modelling the service consumer.
* **Storage** service provided by a facility, a unit or entity with consumable materials storage capability. Resources are transferred from the federate modelling the service consumer to the federate modelling the service provider.
* **Repair** service can be performed on equipment (i.e. non-consumables items such as platforms) by facilities or units capable of performing the requested repairs. Modelling responsibility is by default not transferred from federate modelling the service consumer (e.g. a damaged platform) to the application with modelling responsibility for the service provider (i.e. repairing facility). However, modelling responsibility can be transferred with the inclusion of the Transfer of Modelling Responsibility (TMR) pattern.
* **Transport** service is provided by a facility, a unit or entity with transportation capability of non-consumable materials, e.g. units and platforms. Transported units are embarked, transported and disembarked. Modelling responsibility is by default not transferred from the federate modelling the service consumer (transported unit) to the federate modelling the service provider (transporter). However, modelling responsibility can be transferred with the inclusion of the Transfer of Modelling Responsibility (TMR) pattern. Units or platforms being transported are modelled as inactive during transportation.

> Examples of uses:
> 
> * Supply of fixed wing aircraft in airports or during aerial refueling.
> * Supply of helicopters in assembly areas.
> * Repair of damaged platforms by a maintenance unit without changing platform's location.
> * Maintenance of damaged platforms previously deposited in a facility.
> * Transport of units, platforms, and humans by train, ship, or aircraft.
> * Embarkment and disembarkment of units.
> 