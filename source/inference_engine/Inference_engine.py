def inference_engine(ruleList, inputFact):
    # handle when input with multiple fact!
    inputFactArr = inputFact.split(",")
    workingMemory = list(map(lambda x: x.upper(), inputFactArr))

    log = []
    ruleremain = False
    hasaconclude = False

    if len(ruleList) > 0:
        ruleremain = True
    log.append({
        "workingMemory": list(workingMemory),
        "prompt": "initialstate"
    })

    while (ruleremain == True):
        # print("loop")
        hasaconclude = False
        for rule in ruleList:
            if any('NIL' in s for s in workingMemory):
                return ["Can you provide some fact?"]

            elif hasaconclude == True:
                continue

            else:
                if 'operator1' in rule and 'operator2' in rule:
                    # if there are fact that mat to fact
                    firstCheck = False
                    if rule['operator1'] == "AND":
                        # fact1 and fact 2
                        if any(rule['fact1'] in s for s in workingMemory) and any(rule['fact2'] in s for s in workingMemory):
                            firstCheck = True
                    else:
                        # fact1 or fact2
                        if any(rule['fact1'] in s for s in workingMemory) or any(rule['fact2'] in s for s in workingMemory):
                            firstCheck = True

                    if rule['operator2'] == "AND":
                        if firstCheck and any(rule['fact3'] in s for s in workingMemory):
                            if rule['conclude'] not in workingMemory:
                                log.append({
                                    "workingMemory": list(workingMemory),
                                    "conclude": rule['conclude'],
                                })

                                workingMemory.append(rule['conclude'])

                                hasaconclude = True
                                break

                    else:
                        if firstCheck or any(rule['fact3'] in s for s in workingMemory):
                            if rule['conclude'] not in workingMemory:
                                log.append({
                                    "workingMemory": list(workingMemory),
                                    "conclude": rule['conclude'],
                                })

                                workingMemory.append(rule['conclude'])

                                hasaconclude = True

                                break

                elif 'operator1' in rule:
                    if rule['operator1'] == "AND":
                        if any(rule['fact1'] in s for s in workingMemory) and any(rule['fact2'] in s for s in workingMemory):
                            if rule['conclude'] not in workingMemory:
                                log.append({
                                    "workingMemory": list(workingMemory),
                                    "conclude": rule['conclude'],
                                })

                                workingMemory.append(rule['conclude'])

                                hasaconclude = True

                                break

                    else:
                        if any(rule['fact1'] in s for s in workingMemory) or any(rule['fact2'] in s for s in workingMemory):
                            if rule['conclude'] not in workingMemory:
                                log.append({
                                    "workingMemory": list(workingMemory),
                                    "conclude": rule['conclude'],
                                })

                                workingMemory.append(rule['conclude'])

                                hasaconclude = True

                                break

                else:
                    if any(rule['fact1'] in s for s in workingMemory):
                        if rule['conclude'] not in workingMemory:
                            log.append({
                                "workingMemory": list(workingMemory),
                                "conclude": rule['conclude'],
                            })

                            workingMemory.append(rule['conclude'])

                            hasaconclude = True

                            break
        else:
            ruleremain = False

    ruleList = []
    inputFact = []
    return {
        "workingMemory": list(workingMemory),
        "log": log
    }
